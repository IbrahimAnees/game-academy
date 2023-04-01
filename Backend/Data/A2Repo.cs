using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using A2.Models;
using A2.Data;
using System.Xml.Linq;

namespace A2.Data
{
    public class A2Repo : IA2Repo
    {
        private readonly A2DBContext _dbContext;

        public A2Repo(A2DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool ValidLogin(string userName, string password)
        {
            User u = _dbContext.Users.FirstOrDefault(e => e.UserName == userName && e.Password == password);
            if (u == null)
                return false;
            else
                return true;
        }

        public User AddUser(User user)
        {
            EntityEntry<User> e = _dbContext.Users.Add(user);
            User u = e.Entity;
            _dbContext.SaveChanges();
            return u;
        }




        public GameRecord AddGameRecord(GameRecord gameRecord)
        {
            EntityEntry<GameRecord> e = _dbContext.GameRecords.Add(gameRecord);
            GameRecord gr  = e.Entity;
            _dbContext.SaveChanges();
            return gr;
        }



        public bool CheckUserExist(string username)
        {
            IEnumerable<User> users = _dbContext.Users.ToList<User>();
            User userExists = users.FirstOrDefault(e => e.UserName == username);
          
            if (userExists == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public User GetUserByName(string userName)
        {
            IEnumerable<User> temp = _dbContext.Users.ToList<User>();
            List<User> users = new List<User>();
            foreach (User u in temp)
            {
                if (u.UserName == null)
                {
                    continue;
                }
                else
                {
                    if (u.UserName.ToLower().Contains(userName.ToLower()))
                    {
                        return u;
                    }
                }
            }
            return null;
        }

        public GameRecord GetGameById(string gameRecord)
        {
            IEnumerable<GameRecord> temp = _dbContext.GameRecords.ToList<GameRecord>();
            List<GameRecord> gameRecords = new List<GameRecord>();
            foreach (GameRecord gr in temp)
            {
                if (gr.GameId == null)
                {
                    continue;
                }
                else
                {
                    if (gr.GameId == gameRecord)
                    {
                        return gr;
                    }
                }
            }
            return null;
        }



        public GameRecord CheckForWait()
        {
            IEnumerable<GameRecord> grs = _dbContext.GameRecords.ToList<GameRecord>();
            GameRecord gr = grs.FirstOrDefault(e => e.State == "wait");
            return gr;
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }


        public IEnumerable<GameRecord> GetAllGames()
        {
            IEnumerable<GameRecord> grs = _dbContext.GameRecords.ToList<GameRecord>();
            return grs;
        }

        public void DeleteRecord(GameRecord record)
        {
            _dbContext.GameRecords.Remove(record);
        }

    }
}
