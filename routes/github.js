const request = require("superagent")
module.exports = (app)=>{
    app.get('user/signin/callback', (req, res, next)=> {
        const {query} = req;
        const {code} = query;
        if (!code) {
            return res.send({
                success: false,
                message: 'Error: no code'
            })
        }
        request
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id: '0de205da184f86852dee',
            client_secret: 'd776cf5bee7754c8303279c9ed575feba6efb091',
            code: code
        })
        .set('Accept', 'application/json')
        .then(function(result){
            const data = result.body;
            res.send(data);
        })

              


        })
}