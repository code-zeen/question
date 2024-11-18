import useSprite from '../useSprite'
import { SpriteEnum } from '../getSprite'

interface PokeballGrayBgProps {
    id: number
    name: string
}

function PokeballGrayBg({ id, name }: PokeballGrayBgProps) {
  const { spriteSrc } = useSprite(SpriteEnum.GEN_V, id)

    return (
        <div className="flex flex-col relative justify-center items-center">
            <div
                className="w-48 h-24 border-8 border-gray-100 bg-gray-300 rounded-t-full transform"
                style={{ transform: 'translateY(1px)' }}>
            </div>
            <div
                className="w-48 h-24 border-8 border-gray-100 bg-gray-200 rounded-b-full transform"
                style={{ transform: 'translateY(-1px)' }}>
            </div>
            <div className="bg-gray-100 w-24 h-24 rounded-full absolute"></div>
            <div className="bg-gray-200 w-16 h-16 rounded-full absolute"></div>
            <div className="absolute">
                <img src={spriteSrc} alt={name} />
            </div>
        </div>
    )
}

export default PokeballGrayBg