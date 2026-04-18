export function EggSelection({ selectEgg }) {

    const eggs = [
        { id: 1, color: 'bg-rose-400', emoji: '🥚' },
        { id: 2, color: 'bg-amber-400', emoji: '🥚' },
        { id: 3, color: 'bg-sky-400', emoji: '🥚' },
        { id: 4, color: 'bg-emerald-400', emoji: '🥚' },
    ]

    return (
        <div className="flex flex-col gap-4 align-center justify-center min-h-screen p-4">

            <form className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto" onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                const petName = formData.get('petName') 
                const eggId = formData.get('eggId')
                if ( petName && eggId ) {
                    selectEgg(eggId, petName)
                } else {
                    alert("Please enter a name for your pet!")
                }
            }}>

                <label className="text-lg font-semibold">
                    <span>Name Your New Pet:</span>
                    <input type="text" name="petName" required className="mb-4 p-2 border rounded w-full" />
                </label>

                <div className="flex gap-4 justify-center mt-4 flex-nowrap flex-direction-row">
                    {eggs.map(egg => (
                        <label key={egg.id} className="cursor-pointer">
                            <input
                                type="radio"
                                name="eggId"
                                value={egg.id}
                                className="sr-only"
                            />
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${egg.color}`}>
                                <span className="text-2xl">{egg.emoji}</span>
                            </div>
                        </label>
                    ))}
                </div>

                <button type="submit" className="mt-6 w-full px-4 py-2 rounded-lg font-semibold bg-violet-400 hover:bg-violet-500 text-white transition">
                    Hatch!
                </button>

            </form>

        </div>
    )
}
