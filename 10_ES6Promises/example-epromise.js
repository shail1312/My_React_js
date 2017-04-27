function getTempCallback(location, callback){
  callback(undefined, 78);
  callback('city not found');
}
getTempCallback('Reaipur',function(err,temp){
  if(err){
    console.log('error',err);
  } else {
    console.log('success',temp);
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
      resolve(79);
      reject('city not found');
    },1000);
  });
}

getTempPromise('Raipur').then(function (temp) {
  console.log('Promise success',temp);
},function (err) {
  console.log('Promise error',err);
})
