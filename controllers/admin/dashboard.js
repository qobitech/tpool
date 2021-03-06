module.exports = {
  faq: (req, res) => {
    res.render('Pages/admin-dash-faq', { pageName: 'Faq', path : "admin-faq"});
  },

  employerMessages: (req, res) => {
    res.render('Pages/admin-dash-employer-msg', { pageName: 'Messages for employer', path: "admin-dashboard"});
  },

   messages: (req, res) => {
    //  get all users from db
    // const allUsers = await  axios.get(`https://api.lancers.app/v1/message/chat-users`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    // })

     res.render('Pages/admin-dash-messages', 
      { pageName: 'Admin dashboard messages', path : "admin-messages",
        data : {allUsers : [
          {name : "Mark Essien",time : "12.30",subject: "HNG Sponsorship",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Stage 10 Finalist",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Sponsorship",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Stage 10 Finalist",imagesrc: ""},
        ]}
      });
   },


   allEmployers: (req, res) => {
    res.render('Pages/admin-dash-employers', { pageName: 'Admin | All Employers', path: "admin-all-employers"})
   },

   allEmployees: (req, res) => {
    res.render('Pages/view-employee-dashboard', { pageName: 'View Employee', path : "admin-viewEmployee" });
   },
  
   dashboard: (req, res) => {
    res.render('Pages/admin-dashboard', { pageName: 'Admin dashboard', path: "admin-dashboard"});
  },

  adminVerification: (req, res) => {
    res.render('Pages/admin-verification', {pageName: 'Admin Verification'})
  },

  employeeReview: (req, res) => {
    res.render('Pages/employee-review', { pageName: 'Employee Review'} )
  },

  adminSettings: (req, res) => {
    res.render('Pages/admin-settings', {pageName: 'Admin Settings',path: "admin-settings"})
  },

  adminEmployee: (req, res) => {
    res.render('Pages/admin-viewEmployee', {pageName: 'Talent Pool | View Employee',path: "admin-viewEmployee"})
  },
  adminsList: (req, res) => {
    res.render('Pages/admins-list', {pageName: 'Talent Pool | View Employee',path: "admins-list"})
  }
}
