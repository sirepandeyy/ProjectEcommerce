import { Link } from './../../submodules/Ecommerce-Platform-Entities/link';
import { LinkDto } from './../../submodules/Ecommerce-Platform-Dtos/link';
import FacadeBase from "./facadebase";
import LinkService from 'app/appService/linkService';
export declare class LinkFacade extends FacadeBase<Link, LinkDto> {
    private linkService;
    constructor(linkService: LinkService);
}
