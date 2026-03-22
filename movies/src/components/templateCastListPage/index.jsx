import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CastList from "../castList";
import Header from "../headerMovieList";

function CastListPageTemplate({ cast, title }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedCast = cast
    .filter((c) =>
      c.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
    .filter((c) => c.known_for_department === "Acting");

  const handleChange = (e) => {
    setNameFilter(e.target.value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>

      <Grid container sx={{ flex: "1 1 500px" }}>
        <CastList cast={displayedCast} />
      </Grid>
    </Grid>
  );
}

export default CastListPageTemplate;