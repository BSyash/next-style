import Image from "next/image"
const Pets = () => {
    return (
        <div>
            {
                ['1', '2', '3', '4', '5'].map(path => {
                    return (
                        <div key={path}>
                            <Image src={`/petImg/pet${path}.jfif`} width={450} height={450} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pets