import { useEffect } from "react";
import ReactDOM from "react-dom";
// import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';

const Books = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let books = useSelector((state) => state.Book.books)
  console.log("BOOOOKS", books)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_BOOK", location, navigate })
  }, []);

  return <>
        <Grid container>
      {
        books.map((book, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} style={{justifyContent: 'center', alignItems: 'center'}}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={10}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="470"
                      image={"http://localhost:5000/images/" + book.cover}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {book.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small">
                      <Link to={'/books/' + '/details' + book.id}>More</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

          </Grid>
        ))
      }
    </Grid>
  </>
}

export default Books;



