import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#424949"
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#424949",
    marginTop: 5
  },
  paraTag: {
    color: "#797D7F",
    fontSize: 13
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 60,
    paddingTop: '56.25%', // 16:9
  },
  about: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 600,
    color: "#424949"
  },
  content: {
    marginBottom: 20,
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      {props.contents.map(item => {
        return (
          <div>
            <Card className={classes.root} variant="outlined" key={item.id}>
        <CardContent>
          <Typography variant="h6" className={classes.mainTitle} gutterBottom>
            {item.name}
          </Typography>
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.name}
          />
          <Typography className={classes.title} variant="h6">
            Country :
      </Typography>
          <Typography variant="p" className={classes.paraTag}>
            {item.country}
          </Typography>
          <Typography className={classes.title} variant="h6">
            Field :
      </Typography>
          <Typography variant="p" className={classes.paraTag}>
            {item.field}
          </Typography>
          <Typography className={classes.title} variant="h6">
            Achievements :
      </Typography>
          <Typography variant="p" className={classes.paraTag}>
            {item.achievements}
          </Typography>
          <Typography className={classes.title} variant="h6">
            Born :
      </Typography>
          <Typography variant="p" className={classes.paraTag}>
            {item.born}
          </Typography>
        </CardContent>
      </Card>

      <Typography className={classes.about} variant="h6">
        About
    </Typography>
      <Typography className={classes.content} color="textSecondary">
        {item.content1}
      </Typography>
      <Typography color="textSecondary">
        {item.content2}
      </Typography>
          </div>
        );
        })}
    </div>
  );
}
