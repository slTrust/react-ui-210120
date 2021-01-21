import classes from '../classes';
describe('classes',()=>{
    it('接受一个 className',()=>{
        const result = classes('a')
        expect(result).toEqual('a')
    })

    it('接受两个 className',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
    })

    it('接受 正常值 和 undefined ',()=>{
        const result = classes('a',undefined)
        expect(result).toEqual('a')
    })

    it('接受  各种 falsy值 ',()=>{
        const result = classes('a',undefined,null,'',0,false)
        expect(result).toEqual('a')
    })

    it('接受 0 个参数', ()=>{
        const result = classes()
        expect(result).toEqual('')
    })
})