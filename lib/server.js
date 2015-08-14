import express from 'express';
import path from 'path';

const app = express();

app.get( '/app.js', ( req, res ) => {
  res.sendFile( path.join( __dirname, '..', 'dist/app.js' ));
});

app.get( '/:name.html', ( req, res ) => {
  const name = req.params.name;
  const module = name.split( '-' )[ 0 ];

  res.sendFile( path.join( __dirname, '..', `lib/modules/${module}/templates/${name}.html` ));
});

app.listen( 3000 );
