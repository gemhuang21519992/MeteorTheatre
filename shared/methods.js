Meteor.methods({
  "updateMasterVolume":function(val){
    var vid = Screen.findOne();
    if(vid){
      Screen.update({ _id: vid._id }, {$set: {volume:val}});
    }
  },
  "incViewer":function(){
    var vid = Screen.findOne();
    if(vid){
      Screen.update({ _id: vid._id }, {$set: {viewerCount:vid.viewerCount+1}});
    }
  },
  "decViewer":function(){
    var vid = Screen.findOne();
    if(vid){
      Screen.update({ _id: vid._id }, {$set: {viewerCount:vid.viewerCount-1}});
    }
  },
  'play':function(setPlay){
    var vid = Screen.findOne();
    if(vid){
      Screen.update({ _id: vid._id }, {$set: {playing:setPlay}});
    }
  },
  'time':function(t){
    var vid = Screen.findOne();
    if(vid){
      Screen.update({ _id: vid._id }, {$set: {time:t}});
    }
  }
});
