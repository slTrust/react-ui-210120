import classes,{scopedClassMaker} from "../classes";
describe("classes", () => {
  it("接受一个 className", () => {
    const result = classes("a");
    expect(result).toEqual("a");
  });

  it("接受两个 className", () => {
    const result = classes("a", "b");
    expect(result).toEqual("a b");
  });

  it("接受 正常值 和 undefined ", () => {
    const result = classes("a", undefined);
    expect(result).toEqual("a");
  });

  it("接受  各种 falsy值 ", () => {
    const result = classes("a", undefined, null, "", 0, false);
    expect(result).toEqual("a");
  });

  it("接受 0 个参数", () => {
    const result = classes();
    expect(result).toEqual("");
  });
});

describe('scopedClassMaker', () => {
  it('接收字符串 或 对象', () => {
    const sc = scopedClassMaker('fui-layout')
    expect(sc('')).toEqual('fui-layout')
    expect(sc('x')).toEqual('fui-layout-x')
    expect(sc({y:true,z:false})).toEqual('fui-layout-y')
    expect(sc({y:true,z:true})).toEqual('fui-layout-y fui-layout-z')
    expect(sc({y:true,z:true},{extra:'red'})).toEqual('fui-layout-y fui-layout-z red')
  })
})
