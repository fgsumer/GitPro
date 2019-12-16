const request = require('superagent');

const router = require('express').Router();

router.route('/user/signin/callback').get((req, res) => {
  const { query } = req;
  const { code } = query;
  if (!code) {
    return res.send({
      success: false,
      message: 'Error: no code',
    });
  }
  request
    .post('https://github.com/login/oauth/access_token')
    .send({
      client_id: '0de205da184f86852dee',
      client_secret: 'd776cf5bee7754c8303279c9ed575feba6efb091',
      code: code,
    })
    .set('Accept', 'application/json')
    .then(function(result) {
      const token = result.body.access_token;
      res.send(token);
      localStorage.setItem('token', token);
    });
});

module.exports = router;
