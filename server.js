app.get("/read_announcement/:id", (req, res) => {
  console.log(req,"aaaaaaaaaaaaaaaaaaaaaaaaa")
  const sql = "SELECT * FROM announcements WHERE id = ?";
  const id = req.params.id;
  console.log(id)
  db.query(sql, [id], (err, result) => {
    console.log(result,"aaaaaaaaaaaaaaaaresult")
    if (err) return res.json({ Message: "Error in server" });
    return res.json(result);
  });
});
