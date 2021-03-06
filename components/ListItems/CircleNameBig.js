import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grow from '@material-ui/core/Grow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const CircleNameHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  && .name-holder {
    color: ${(props) => props.color};
    max-width: 300px;
    margin-top: 20px;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
  }
`;
const CircleImg = styled.img`
  display: inline;
  max-height: 200px;
  width: auto;
  border-radius: 100px;
`;
export default function CircleNameBig(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 960) {
      setScrolled(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grow
      in={isScrolled}
      {...(isScrolled ? { timeout: props.timeout || 0 } : {})}
    >
      <CircleNameHolder color={props.textColor}>
        <CircleImg src="http://lorempixel.com/500/500/" />
        <div className="name-holder">{props.children}</div>
      </CircleNameHolder>
    </Grow>
  );
}
