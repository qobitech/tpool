module.exports = {
  employerDashboard: (req, res) => {
      res.render('Pages/employer-dashboard', { pageName: 'Employer Dashboard' });
  },

  employerProfile : (req, res) => {
      res.render('Pages/employer-profile-page', { pageName: 'Profile'});
    },

  employerMessages : (req, res) => {
  
    // get all users from db
    // const allUsers = await  axios.get(`https://api.lancers.app/v1/message/chat-users`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    // })
    
    res.render('Pages/employer-messages', 
        { pageName: 'Employer Messages', 
        data : {allUsers : [
          {name : "Mark Essien",time : "12.30",subject: "HNG Sponsorship",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Stage 10 Finalist",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Sponsorship",imagesrc: ""},
          {name : "Mark Essien",time : "12.30",subject: "HNG Stage 10 Finalist",imagesrc: ""},
        ]}}
    );
  
  },

  employerCreateProfile: (req, res) => {
    res.render('Pages/employer-profile-creation', { pageName: 'Create Profile'});
  },

  employerDashboardSettings: (req, res) => {
    res.render('Pages/employer-dash-settings.ejs', { pageName: 'Employer Dashboard - Settings' });
  },

  employerDashboardSupport: (req, res) => {
    res.render('Pages/employer-dash-support', { pageName: 'Employer Dashboard' });
  },

  employerEmployeeGallery: (req, res) => {
    res.render('Pages/employer-employees-gallery', { pageName: 'Employee Gallery' });
  },

  employerAddTeam: (req, res) => {
    res.render('Pages/employer-add-a-team', { pageName: 'Employer - Add Team' });
  },

  employerCompanyDashboard: (req, res) => {
    res.render('Pages/employer-company-dashboard', { pageName: 'Employer Dashboard' });
  },

  employerIndividualCreateProfile: (req, res) => {
    res.render('Pages/employer-indiv', { pageName: 'Create Profile' });
  },
}