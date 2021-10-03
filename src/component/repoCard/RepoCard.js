import moment from 'moment';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import BugReportIcon from '@mui/icons-material/BugReport';

const RepoCard = ({ repositoryName, repositoryOwner, repositoryDescription, numberOfStars, numberOfIssues, updatedAt }) => {
  return (
    <div>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={repositoryOwner.avatarUrl}
          alt={`Avatar Image for ${repositoryOwner.name}`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {repositoryName}
            </Typography>
            <Typography variant="subtitle1" color="text." component="div">
              {`By ${repositoryOwner.name}`}
            </Typography>
            <br />
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {repositoryDescription}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" >{numberOfStars} &nbsp; <StarIcon /></Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outlined" >{numberOfIssues.totalCount} <BugReportIcon /></Button>
            &nbsp;
            <Typography variant="sub" color="text.secondary" component="div">
              {`Updated ${moment(updatedAt).fromNow()}`}
            </Typography>
          </Box>
        </Box>
      </Card>
      <br />
    </div>
  )
}

export default RepoCard;
