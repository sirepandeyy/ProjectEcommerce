import FeaturesAppService from "../appservices/features.appservice";
import { FeaturesDto } from "../../submodules/Portfolio-Platform-Dtos/featuresDto";
import { FeaturesEntity } from "../../submodules/Portfolio-Platform-Entities/featuresEntity";
import FacadeBase from "./facadebase";
export declare class FeaturesFacade extends FacadeBase<FeaturesEntity, FeaturesDto> {
    private featuresAppService;
    constructor(featuresAppService: FeaturesAppService);
}
