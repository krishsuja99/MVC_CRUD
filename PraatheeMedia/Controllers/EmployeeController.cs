using Microsoft.AspNetCore.Mvc;
using PraatheeMedia.Models;

namespace PraatheeMedia.Controllers
{

    public class EmployeeController : Controller
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: Employee
        [HttpPost]
        public IActionResult Index()
        {
            var employees = _context.Jobs.ToList();
            return Json(employees);
        }

        // POST: Employee/Create
        [HttpPost]
        public IActionResult AddEmployee(Job employee)
        {
            if(employee != null)
            {
                _context.Jobs.Add(employee);
                _context.SaveChanges();
            }            
            return Json("Success");
        }

        // POST: Employee/Delete/5
        [HttpPost]
        public IActionResult DeleteConfirmed(int id)
        {
            var employee = _context.Jobs.Find(id);
            if(employee != null)
            {
                _context.Jobs.Remove(employee);
                _context.SaveChanges();
            }
            return Json("Success");
        }

        // GET: Employee/Search
        [HttpPost]
        public IActionResult SearchEmployee(string searchString)
        {
            var employees = _context.Jobs
                .Where(e => e.Name.Contains(searchString) || e.Address.Contains(searchString))
                .ToList();

            return Json(employees);
        }

    }
}
