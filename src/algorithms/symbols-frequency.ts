export const countSymbolFrequency = (
    symbols: string[],
    symbol: string
) => symbols.reduce(
    (count, s) => count + Number(s === symbol),
    0
)

export const countSymbolsFrequency = (text: string) => {
    const symbols = text.split('')
    return symbols.reduce<Record<string, number>>(
        (frequencyMap, symbol) => {
            if (frequencyMap[symbol]) {
                return frequencyMap
            }
            
            frequencyMap[symbol] = countSymbolFrequency(symbols, symbol)
            return frequencyMap
        }, 
        {}
    )
}

export const countSymbolsFrequencyPercent = (text: string) => {
    const frequencyMap = countSymbolsFrequency(text)
    return Object
        .keys(frequencyMap)
        .reduce(
            (map, symbol) => {
                map[symbol] = (map[symbol] / text.length) * 100
                return map
            },
            frequencyMap
        )
}
    
