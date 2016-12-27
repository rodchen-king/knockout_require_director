using knockout_require_director.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace knockout_require_director.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetVisits()
        {
            Thread.Sleep(2000);

            List<Visit> listArray = new List<Visit>();

            listArray.Add(new Visit() { Age = 12, Copany = "Augmetnum", FullName = "RodChen", Profession = "Soft Engieer", SearchContext = "Director", VisitDate = "May 27, 2014 11:47:56 PM ", VisitName = "121000210" });
            listArray.Add(new Visit() { Age = 12, Copany = "Tianying", FullName = "ChenJianLu", Profession = "Soft Engieer", SearchContext = "Require", VisitDate = "May 27, 2014 11:47:56 PM ", VisitName = "121000211" });

             listArray.ToArray();

             return Json(new { VisitInfo = listArray.ToArray() }, JsonRequestBehavior.AllowGet);
        }
    }
}
