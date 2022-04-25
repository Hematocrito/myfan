import "reflect-metadata";

export function Action(action: any) {
  return (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(action.name, memberName, target);
  };
}
