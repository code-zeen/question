import Draggable from './Draggable.tsx'
import DropArea from './DropArea.tsx'
import { OptionType } from '../questionType.ts'

function DragAndDrop({ options }: { options: OptionType[] }) {
  return (
    <div className="flex flex-col gap-4">
      <Draggable options={options} />
      <DropArea />
    </div>
  )
}

export default DragAndDrop