using System;
using System.Collections.Generic;

namespace PraatheeMedia.Models
{
    public partial class EmployeeTable
    {
        public int Id { get; set; }
        public string? Name { get; set; } 
        public string? Address { get; set; }
        public string? Designation { get; set; }
    }
}
