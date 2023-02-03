type Props = { height: number }

export default function SpacerVertical ({ height }: Props) {
  return (
    <div style={{ height, width: 1 }}></div>
  )
}