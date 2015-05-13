/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var name = request.parameters.device;
if (storage.global.access_count === undefined)
  storage.global.access_count = 0
storage.global.access_count += 1;

return {
  "teste" : "huebr",
  "name"  : name,
  "count" : storage.global.access_count
}   							