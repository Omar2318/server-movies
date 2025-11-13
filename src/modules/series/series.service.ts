import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Series } from './entities/series.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly serieRepository: Repository<Series>
  ){}

  async create(createSeriesDto: CreateSeriesDto) {
    const newSerie = this.serieRepository.create({...createSeriesDto});
    return await this.serieRepository.save(newSerie);
  }

  findAll() {
    return `This action returns all series`;
  }

  findOne(id: number) {
    return `This action returns a #${id} series`;
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return `This action updates a #${id} series`;
  }

  async remove(id: string) {
     const serie = await this.serieRepository.findOneBy({ id });
    if (!serie) {
      throw new Error(`Pelicula con el ID ${id} no encontrada`);
    }
    await this.serieRepository.remove(serie);
    return serie;
  }
}
