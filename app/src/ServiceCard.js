import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    // maxWidth: 214,
    // maxHeight: 214,
    display: 'inline-block',
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
    height: '160px',
    width: '160px'
  },
};

function ServiceCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={props.service.imgPath}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
    <Typography gutterBottom variant="overline" align="center">
      {props.service.label}
    </Typography>
    </div>
  );
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceCard);