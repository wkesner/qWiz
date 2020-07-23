module.exports = {
  apps : [{
    name: 'qWiz',
    script: '../src/index.js',
    watch: '.',
    args: 'serve build -s',
    env_production: {
       NODE_ENV: 'production'
    }
  }, {
    script: './build/service-worker',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
