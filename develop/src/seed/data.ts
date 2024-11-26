const usernames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aaron',
    'Aarman',
    'Zion',
    'Zubair',
    'Jared',
    'Courtney',
    'Gillian',
    'Alex',
    'Mark',
    'Grace',
    'Nathaniel',
  ];
  
  const thoughtsText = [
    "Here's a cool thought...",
    'I love coding!',
    'JavaScript is fun.',
    'Mongoose makes working with MongoDB easy.',
    'I need coffee to function!',
    'This is my favorite social network!',
    'What is on your mind?',
    'Feeling productive today!',
  ];
  
  const reactionTexts = [
    'Nice thought!',
    'Totally agree!',
    'That is interesting.',
    'Wow, amazing!',
    'This is insightful.',
    'I relate to this!',
  ];
  
  // Get a random item from an array
  export const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Generate random users
  export const getRandomUsers = (count: number) => {
    const users = [];
    for (let i = 0; i < count; i++) {
      const username = `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 1000)}`;
      const email = `${username.toLowerCase()}@example.com`;
      users.push({ username, email});
    }
    return users;
  };
  
  // Generate random thoughts
  export const getRandomThoughts = (usernames: string[], count: number) => {
    const thoughts = [];
    for (let i = 0; i < count; i++) {
      const thoughtText = getRandomArrItem(thoughtsText);
      const username = getRandomArrItem(usernames);
  
      // Add random reactions to the thought
      const reactions = [];
      for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
        reactions.push({
          reactionBody: getRandomArrItem(reactionTexts),
          username: getRandomArrItem(usernames),
        });
      }
  
      thoughts.push({ thoughtText, username, reactions });
    }
    return thoughts;
  };
  