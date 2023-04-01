using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using A2.Models;

namespace A2.Data
{
    public interface IA2Repo
    {
        public User AddUser(User user);
        public GameRecord AddGameRecord(GameRecord gr);

        public bool ValidLogin(string userName, string password);

        public bool CheckUserExist(string username);
        public User GetUserByName(string userName);
        public GameRecord GetGameById(string gameRecord);

        public GameRecord CheckForWait();
        public IEnumerable<GameRecord> GetAllGames();

        public void DeleteRecord(GameRecord gameId);


        void SaveChanges();
    }
}
