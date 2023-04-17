export const isAllowed = (user, rights) =>
  rights.some(right => user.rights.includes(right));

export const hasRole = (development, user, roles = []) => {
  //console.log(5001, development)
  const userRole = user?.authDevelopments.filter(elem => elem.title === development)[0].role
  //console.log(5002, userRole, roles)
  if (roles.includes("all")) return true
  return roles.some(role => userRole?.includes(role))
}