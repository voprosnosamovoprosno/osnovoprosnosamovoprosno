const path = require("path");
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false
});
// Setup our static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'
});
fastify.register(require("@fastify/formbody"));
// point-of-view is a templating manager for fastify
fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});
const db = require("./sqlite.js");
const errorMessage =
  "Whoops! Error connecting to the database–please try again!";
// OnRoute hook to list endpoints
const routes = { endpoints: [] };
fastify.addHook("onRoute", routeOptions => {
  routes.endpoints.push(routeOptions.method + " " + routeOptions.path);
});

var vssgml=null;
async function vssmsf()
   {let vssbvl=false;
    vssgml = await db.vssgetf();
    console.log('?vssgml.length'+vssgml.length+'?');
    for(let vssj=0;vssj<vssgml.length;vssj++)
      {if(vssj<vssgml.length-24)
        {vssdml=await db.vssdelf(vssgml[vssj].vssid);
         vssbvl=true;
         console.log('?vssqntdelid'+vssgml[vssj].vssid+vssdml+'?');
        }else{if(vssgml[vssj].vsstxt[0]!='?'/*||vssgml[vssj].vssid==563*/)
               {vssdml=await db.vssdelf(vssgml[vssj].vssid);
                vssbvl=true;
                console.log('?vsscntdelid'+vssgml[vssj].vssid+vssdml+'?');
               }
             }
      } 
    if(vssbvl==true)
     {vssgml = await db.vssgetf();
      console.log('?vssgml.length'+vssgml.length+'?');
     }
  }
fastify.post("/", async (request, reply) => {
 if(vssgml==null){await vssmsf();}
 if(request.body!=-1)
  {for(vssi=vssgml.length-1;vssi>0;vssi--)
    {if(vssgml[vssi].vssid==request.body)
      {console.log('?vssgml[vssi].vssid'+vssgml[vssi-1].vssid+'?');
       return vssgml[vssi-1].vsstxt+vssgml[vssi-1].vssid;
   }}}
  if(vssgml.length-1>=0)
    {console.log('?vssgml[vssgml.length-1].vssid'+vssgml[vssgml.length-1].vssid+'?');
     return vssgml[vssgml.length-1].vsstxt+vssgml[vssgml.length-1].vssid;
    }
});
fastify.post("/vssadd", async (request, reply) => {
  let vssaml = await db.vssaddf(request.body);
  console.log('?/vssaddvssaddf'+vssaml+'?');
  console.log(request.body);
  vssmsf();
});
fastify.post("/vssdel", async (request, reply) => {
  let vssdml=await db.vssdelf(request.body);
  console.log('?/vssdelvssdelf'+request.body+vssdml+'?');
  vssmsf();
});
fastify.post("/vssup", async (request, reply) => {
  /*let vssavl=request.body.split('\n');
  let vssidvl=vssavl[vssavl.length-1];
  vssavl.length=vssavl.length-1;
  let vsstxtvl=vssavl.join('\n')+'\n';
  let vssbvl=false;
  console.log(vsstxtvl);
  console.log(vssavl[vssavl.length-18]+' '+vssavl[vssavl.length-17]+' '+vssavl[vssavl.length-16]+' '+vssavl[vssavl.length-15]);
  if(vssavl[vssavl.length-15]=='????????????'&&vssavl[vssavl.length-16]=='????????'&&vssavl[vssavl.length-17]=='????????????'&&vssavl[vssavl.length-18]=='????????')
   {console.log('?8??12?'+'?'+vssidvl+'?');
   vssbvl=true;}
  else{vssbvl = await db.vssaddf(vsstxtvl);
       console.log('?/vssupvssaddf'+vssbvl+'?');}
  if(vssbvl){let vssdml=await db.vssdelf(vssidvl);
             console.log('?/vssupvssdelf'+vssidvl+vssdml+'?');}
  vssmsf();
 */
});
fastify.get("/vssxs", async (request, reply) => {
  console.log('?vssxs?');
});
fastify.get("/", (request, reply) => {
  return reply.view('voprosnosamovoprosno.html');
});
fastify.listen({port:process.env.PORT, host:'0.0.0.0'}, function(err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`?vss${address}?`);
});
/*
// Update text for an message (auth)
fastify.put("/message", async (request, reply) => { 
});
// Delete a message (auth)
fastify.delete("/message", async (request, reply) => {
  let data = {};
  const auth = authorized(request.headers.admin_key);
  if(!auth || !request.query || !request.query.id) data.success = false;
  else data.success = await db.deleteMessage(request.query.id);
  const status = data.success ? 201 : auth ? 400 : 401;
  reply.status(status).send(data);
});
const vsskvn='vsskvv';
// Helper function to authenticate the user key
const authorized = key => {
  if (
    !key ||
    key < 1 ||
    !process.env.ADMIN_KEY ||
    key !== process.env.ADMIN_KEY
  )
    return false;
  else return true;
};
*/
// Run the server and report out to the logs
