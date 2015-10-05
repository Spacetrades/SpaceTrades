  if ( Meteor.isServer ) {

  // Removes the config b/c dupliation error and re-defines it
  // Facebook API config

  // ServiceConfiguration.configurations.remove({
  //   service: "instagram"
  // });

  // ServiceConfiguration.configurations.insert({
  //   service: "instagram",
  //   clientId: "644acc16830a4783957a6ad207ab6c00",
  //   scope:'basic',
  //   secret: "011a28fce8994008ae2eb1cfa131e3d4"
  // }); 

  // Since Facebook Test app has been created, wrap this in conditional that only executes if on Amazon server and not localhost


  // STRICTLY - Production
  // ServiceConfiguration.configurations.remove({
  //   service: "facebook"
  // });

  // ServiceConfiguration.configurations.insert({
  //   service: 'facebook',
  //   appId: Meteor.settings.FacebookId,
  //   secret: Meteor.settings.FacebookSecret
  // });


  // STRICTLY - Dev
  //  ServiceConfiguration.configurations.remove({
  //   service: "facebook"
  // });

  // ServiceConfiguration.configurations.insert({
  //   service: 'facebook',
  //   appId: '520229551462174',
  //   secret: 'b9affb9d81291fbe9bebc123d577100a'
  // });

}