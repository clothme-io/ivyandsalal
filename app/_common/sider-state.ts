export const toggleSiderState = () => {
  const state = getSiderState() === 'expanded' ? 'collapsed' : 'expanded'
  localStorage.setItem('siderState', state)
}

export const getSiderState = ()=>{
  return localStorage.getItem('siderState') || null
}

export const isSiderExpanded = ():boolean => {
  const state = localStorage.getItem('siderState') === 'expanded'
  return state
}