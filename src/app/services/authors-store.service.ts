import { Injectable } from '@angular/core';
import { Author } from '../interfaces/author.interface';
import { ListStore } from '../shared/abstracts/list-store';
import { ApiTenantService } from './api-tenant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService extends ListStore<Author> {

  constructor(private api: ApiTenantService) {
    super();
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      const result = await this.api.getAuthors()
      .toPromise();
      const HTMLTag = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
      const updatedResult = result.map(item => {
        item.description = item.description.replace(HTMLTag, '');
        return item;
      })
      this.setData(updatedResult);
      this.setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  }
}
