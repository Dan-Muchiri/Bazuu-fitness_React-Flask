import React, { useEffect, useState } from 'react';
import useAuthStore from './authStore';

function MyActivitiesPage() {
  const { isLoggedIn, userId, checkSession } = useAuthStore();
  const [myActivities, setMyActivities] = useState([]);
  const [followedActivities, setFollowedActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await checkSession();
        if (isLoggedIn) {
          const response = await fetch(`/users/${userId}`);
          if (response.ok) {
            const userData = await response.json();
            const userActivities = userData.user_fitness_activities;
            const ownedActivities = userActivities.filter(activity => activity.access === 'owner');
            const followedActivities = userActivities.filter(activity => activity.access === 'follower');
            setMyActivities(ownedActivities);
            setFollowedActivities(followedActivities);
          } else {
            console.error('Error fetching user data');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, [checkSession, isLoggedIn, userId]);

  // Function to render activity cards
  const renderActivityCards = (activities, isFollowed) => {
    return activities.map(activity => (
      <div key={activity.id} className="activity-card">
        <img src={activity.fitness_activity.picture} className="activity-image" alt={activity.fitness_activity.title} />
        <div className="activity-details">
          <h5 className="activity-title">{activity.fitness_activity.title}</h5>
          <p className="activity-description">{activity.fitness_activity.description}</p>
          <p className="activity-duration">Duration: {activity.fitness_activity.duration} minutes</p>
          {isFollowed && (
            <button className="form-button" onClick={() => handleUnfollow(activity.id)}>Unfollow</button>
          )}
        </div>
      </div>
    ));
  };

  const handleUnfollow = async (activityId) => {
    try {
      const response = await fetch(`/user-fitness-activities/${activityId}`, {
        method: 'DELETE', // Change method to DELETE
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          fitness_activity_id: activityId,
          access: 'follower',
        }),
      });

      if (response.ok) {
        // Remove the unfollowed activity from the followedActivities state
        setFollowedActivities(prevState => prevState.filter(activity => activity.id !== activityId));
        console.log('Activity unfollowed successfully');
      } else {
        console.error('Error unfollowing activity');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="activity-page">
      <div className="activity-content owned-activities">
        <h2>My Owned Activities</h2>
        <div className="cards">
          {renderActivityCards(myActivities)}
        </div>
      </div>
      <div className="activity-content followed">
        <h2>My Followed Activities</h2>
        <div className="cards">
          {renderActivityCards(followedActivities, true)}
        </div>
      </div>
    </div>
  );
}

export default MyActivitiesPage;
