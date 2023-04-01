using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using A2.Models;
using A2.Data;
using A2.Dto;
using static System.Net.Mime.MediaTypeNames;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Xml.Linq;

namespace A2.Controllers
{
    [Route("api")]
    [ApiController]
    public class A2Controller : Controller
    {
        private readonly IA2Repo _repository;

        public A2Controller(IA2Repo repository)
        {
            _repository = repository;
        }

        [HttpPost("Register")]
        public ActionResult<string> AddUser(User user)
        {
            bool exists = _repository.CheckUserExist(user.UserName);
            if (exists)
            {
                return Ok("Username not available.");
            }
            else
            {
                _repository.AddUser(user);
                return Ok("User successfully registered.");
            }
        }


        // GET api/GetVersionA
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("GetVersionA")]
        public ActionResult<string> GetVersion()
        {
            return Ok("1.0.0 (auth)");
        }


        // GET api/PurchaseItem
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("PurchaseItem/{id}")]
        public ActionResult<Order> PurchaseItem(long id)
        {
            ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
            Claim c = ci.FindFirst("userName");
            string userName = c.Value;

            Order o = new Order { UserName = userName, ProductId = id };
            return Ok(o);

        }


        // GET api/PairMe
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("PairMe")]
        public ActionResult<GameRecordOut> PairMe()
        {
            ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
            Claim c = ci.FindFirst("userName");
            string userName = c.Value;

            User u = _repository.GetUserByName(userName);

            GameRecord availableGame = _repository.CheckForWait();


            if (availableGame == null)
            {
                GameRecord newGame = new GameRecord { GameId = System.Guid.NewGuid().ToString(), State = "wait", Player1 = userName, Player2 = null, LastMovePlayer1 = null, LastMovePlayer2 = null };
                GameRecordOut gOut = new GameRecordOut { GameId = newGame.GameId, State = newGame.State, Player1 = newGame.Player1, Player2 = null, LastMovePlayer1 = null, LastMovePlayer2 = null };
                _repository.AddGameRecord(newGame);
                return Ok(gOut);
            }
            else
            {

                if (availableGame.Player1 == userName)
                {
                    GameRecordOut gOut2 = new GameRecordOut { GameId = availableGame.GameId, State = availableGame.State, Player1 = availableGame.Player1, Player2 = availableGame.Player2, LastMovePlayer1 = availableGame.LastMovePlayer1, LastMovePlayer2 = availableGame.LastMovePlayer2 };
                    return Ok(gOut2);
                }


                GameRecordOut gOut = new GameRecordOut { GameId = availableGame.GameId, State = "progress", Player1 = availableGame.Player1, Player2 = userName, LastMovePlayer1 = null, LastMovePlayer2 = null };
                availableGame.State = "progress";
                availableGame.Player2 = userName;
                _repository.SaveChanges();
                return Ok(gOut);
            }
        }



        // GET api/TheirMove
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("TheirMove/{gameId}")]
        public ActionResult<string> TheirMove(string gameId)
        {
            ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
            Claim c = ci.FindFirst("userName");
            string userName = c.Value;
            bool isP1 = false;
            bool isP2 = false;






            GameRecord gr = _repository.GetGameById(gameId);

            if (gr != null)
            {
                if (gr.Player1 == userName)
                {
                    isP1 = true;
                }

                if (gr.Player2 == userName)
                {
                    isP2 = true;
                }
            }


            if (gr == null)
            {
                return "no such gameId";
            }
            else if ((gr.Player1 != userName) && (gr.Player2 != userName))
            {
                return "not your game id";
            }
            else if (gr.State == "wait")
            {
                return "You do not have an opponent yet.";
            }
            else if (isP1)
            {
                if (gr.LastMovePlayer2 == null)
                {
                    return "Your opponent has not moved yet.";
                }
                else
                {
                    return gr.LastMovePlayer2;
                }
            }
            else if (isP2)
            {
                if (gr.LastMovePlayer1 == null)
                {
                    return "Your opponent has not moved yet.";
                }
                else
                {
                    return gr.LastMovePlayer1;
                }
            }
            else
            {
                return "not your game id";
            }
        }


        // POST api/MyMove
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpPost("MyMove")]
        public ActionResult<string> MyMove(string gameId, string move)
        {
            ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
            Claim c = ci.FindFirst("userName");
            string userName = c.Value;
            GameRecord gr = _repository.GetGameById(gameId);


            bool isP1 = false;
            bool isP2 = false;


            if (gr != null)
            {
                if (gr.Player1 == userName)
                {
                    isP1 = true;
                }

                if (gr.Player2 == userName)
                {
                    isP2 = true;
                }
            }
            else
            {
                return "no such game id";
            }



            if (gr.Player1 == userName || gr.Player2 == userName)
            {
                if (gr.State == "progress")
                {
                    if (isP1)
                    {
                        if (gr.LastMovePlayer1 == null)
                        {
                            gr.LastMovePlayer1 = move;
                            gr.LastMovePlayer2 = null;
                            _repository.SaveChanges();
                            return "move registered";
                        }
                        else
                        {
                            return "It is not your turn.";
                        }
                    }
                    else if (isP2)
                    {
                        if (gr.LastMovePlayer2 == null)
                        {
                            gr.LastMovePlayer2 = move;
                            gr.LastMovePlayer1 = null;
                            _repository.SaveChanges();
                            return "move registered";
                        }
                        else
                        {
                            return "It is not your turn.";
                        }
                    }
                    else
                    {
                        return "not your game id";
                    }
                }
                else
                {
                    return "You do not have an opponent yet.";
                }
            }
            else
            {
                return "not your game id";
            }
        }


        // GET api/QuitGame
        [Authorize(AuthenticationSchemes = "MyAuthentication")]
        [Authorize(Policy = "UserOnly")]
        [HttpGet("QuitGame/{gameId}")]
        public ActionResult<string> QuitGame(string gameId)
        {
            ClaimsIdentity ci = HttpContext.User.Identities.FirstOrDefault();
            Claim c = ci.FindFirst("userName");
            string userName = c.Value;
            User u = _repository.GetUserByName(userName);
            IEnumerable<GameRecord> grs = _repository.GetAllGames();
            bool hasGame = false;
            foreach (GameRecord g in grs)
            {
                if (g.Player1 == userName || g.Player2 == userName)
                {
                    hasGame = true;
                    break;
                }
            }
            GameRecord gr = _repository.GetGameById(gameId);

            if (gr != null)
            {
                if (hasGame)
                {
                    if (gr.Player1 == userName || gr.Player2 == userName)
                    {

                        _repository.DeleteRecord(gr);
                        _repository.SaveChanges();
                        return "game over";
                    }
                    else
                    {
                        return "not your game id";
                    }
                }
                else
                {
                    return "You have not started a game.";
                }
            }
            else
            {
                return "no such gameId";
            }
        }
    }
}
