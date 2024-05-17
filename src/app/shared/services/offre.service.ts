import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
url = "http://localhost:8080/offre";
  constructor(private http:HttpClient) { }
  /*
  private final OffreService offreService;
	@PostMapping("/{id}")
	public ResponseEntity<OffreDto> addOneUser(@RequestBody OffreDto offre, @PathVariable long idCandidat)
	
	{
		return ResponseEntity.ok(offreService.addOneOffre(offre,idCandidat));
	}
	@GetMapping
	public ResponseEntity<Page<OffreDto>> getUsers(Pageable pageable)
	{
		return ResponseEntity.ok(offreService.getOffres(pageable));
	}
	@GetMapping("/{id}")
	public ResponseEntity<OffreDto> getOneOffre(@PathVariable long id)
	{
		return ResponseEntity.ok(offreService.getOneOffre(id));
	}
	@DeleteMapping("/{id}")
	public void deleteOne(@PathVariable long id )
	{
		offreService.deleteOneOffre(id);
	}
  */
  getOffres(){
    return this.http.get(this.url);
  }
  getOffre(id){
    return this.http.get(this.url+"/"+id);
  }
  addOffre(offre,id){
    return this.http.post(this.url+"/"+id,offre);
  }
  deleteOffre(id){
    return this.http.delete(this.url+"/"+id);
  }
}
