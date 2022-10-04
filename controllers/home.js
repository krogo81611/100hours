module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAbout: (req, res) => {
      res.render("about", {
      title: "About",
    });
  },
  getContact: (req, res) => {
      res.render("contactUs", {
      title: "Contact",
    });
  }
};




