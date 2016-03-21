var     express =   require('express')  
	,	load	=	require('express-load')
	,	app		=	express();
	
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.listen(8081,function()
{
	console.log('Never send a human to do a machines job.');
});


