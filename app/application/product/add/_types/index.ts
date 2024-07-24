export type AddProductTabContentProps = {
  onProceed?: ({label, data}:{label:string, data:any}) => void,
  tabName: string
}