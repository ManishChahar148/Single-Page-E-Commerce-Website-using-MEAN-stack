import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import {Router } from '@angular/router';
import Swal from 'sweetalert2';
 
@Injectable({
  providedIn: 'root'
})
export class DashbrdGuard implements CanActivate {
	constructor(private router:Router){}
check;
	canActivate()
	{
		
		this.check=localStorage.getItem('grd');
		if(this.check=="t")
		{
			localStorage.removeItem('grd');
			Swal.fire({
			  position: 'center',
			  type: 'success',
			  title: 'Your are successfully logged in',
			  showConfirmButton: false,
			  timer: 1500
			});
			return true;
		}
		else
		{
			localStorage.removeItem('grd');
			Swal.fire("Oops","You are not authorized to access this page",'error');
			this.router.navigate(['/']);
		}
	}
 






}
