import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import { Link } from './../../submodules/Ecommerce-Platform-Entities/link';
import { HttpService } from "@nestjs/common";
import AppService from "../../submodules/Ecommerce-Platform-Service/AppServiceBase";
import { Repository } from "typeorm";
export default class LinkService extends AppService<Link, LinkDto> {
    private readonly linkRepository;
    http: HttpService;
    constructor(linkRepository: Repository<Link>, http: HttpService);
}
