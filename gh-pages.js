import ghpages from 'gh-pages';

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/z4xi/web.git', // Update to point to your repository  
        user: {
            name: 'z4xi', // update to use your name
            email: 'buddybearrose@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)