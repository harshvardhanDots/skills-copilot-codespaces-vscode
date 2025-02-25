function skillsMembers() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<h3>{{member.name}}</h3>'
  };
}