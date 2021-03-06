﻿using System.Collections.Generic;
using DutchTreat.Data.Entities;

namespace DutchTreat.Data
{
    public interface IDutchRepository
    {
        IEnumerable<Product> GetAllProducts();

        IEnumerable<Product> GetProductsByCatagory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItem);

        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);

        Order GetOrderById(string username, int id);

        bool SaveAll();

        void AddEntity(object model);
        void AddOrder(Order newOrder);
    }
}