import { Controller, Get } from "@nestjs/common";

@Controller("/photos")
export class PhotoController {
	@Get()
	getAll() {
		return "get all"
	}

	getOne() {

	}
}