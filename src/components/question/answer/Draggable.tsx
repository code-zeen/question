import DraggableItem from './DraggableItem.tsx'
import TextBox from './TextBox.tsx'
import { OptionType } from '../questionType.ts'

function Draggable({ options }: { options: OptionType[] }) {
  return (
    <div className="flex relative border-2 border-dashed border-gray-300 rounded-xl gap-2 p-8 pt-8 mt-4">
      <div
        className="flex absolute bg-gray-100 px-4 py-1.5 rounded-3xl right-1/2 top-0 transform translate-x-1/2 -translate-y-1/2">
        <b>끌어놓으세요</b>
      </div>
      {options.map(o => (
        <DraggableItem key={o.id}>
          <TextBox text={o.option} />
        </DraggableItem>
      ))}
    </div>
  )
}

export default Draggable