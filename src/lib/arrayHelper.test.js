import { uniqeMerge, minObjectByField } from './arrayHelper';

describe('arrayHelper', () => {
  describe('uniqeMerge', () =>{
    it('should merge two array if two same items', () =>{
      const arrayOne = [
        {id:1, name: 'hello'},
        {id:2, name: 'name'},
      ];
      
      const arrayTwo = [
        {id:3, name: 'tony'},
        {id:4, name: 'slack'}
      ];
      
      expect(uniqeMerge(arrayOne,arrayTwo, 'id')).toEqual(
        [
          {id:1, name: 'hello'},
          {id:2, name: 'name'},
          {id:3, name: 'tony'},
          {id:4, name: 'slack'}
        ]);
    });
    
    it('should merge two array and filter out duplicate filed', () => {
      const arrayOne = [
        {id:1, name: 'hello'},
        {id:2, name: 'name'},
      ];
  
      const arrayTwo = [
        {id:1, name: 'hello'},
        {id:4, name: 'slack'}
      ];
  
      expect(uniqeMerge(arrayOne,arrayTwo, 'id')).toEqual(
        [
          {id:1, name: 'hello'},
          {id:2, name: 'name'},
          {id:4, name: 'slack'}
        ]);
    })
  });
  
  describe('minObjectByField', () => {
    it('should return the min value object by fieldName', () => {
      const testArray = [
        {id: 3, name:'aaron'},
        {id: 1, name:'hello'},
        {id: 2, name:'toy'},
        {id: 5, name:'amy'}
      ];
      
      expect(minObjectByField(testArray, 'id')).toEqual({
        id:1, name:'hello'
      })
    })
  });
});
