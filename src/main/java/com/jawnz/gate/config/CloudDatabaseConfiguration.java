package com.jawnz.gate.config;


import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import com.github.cloudyrock.mongock.driver.mongodb.springdata.v3.SpringDataMongo3Driver;
import com.github.cloudyrock.spring.v5.MongockSpring5;
import com.github.cloudyrock.spring.v5.MongockSpring5.MongockInitializingBeanRunner;

import io.github.jhipster.config.JHipsterConstants;
import io.github.jhipster.domain.util.JSR310DateConverters.DateToZonedDateTimeConverter;
import io.github.jhipster.domain.util.JSR310DateConverters.DurationToLongConverter;
import io.github.jhipster.domain.util.JSR310DateConverters.ZonedDateTimeToDateConverter;


@Configuration
@EnableMongoRepositories("com.jawnz.gate.repository")
@Profile(JHipsterConstants.SPRING_PROFILE_CLOUD)
public class CloudDatabaseConfiguration extends AbstractCloudConfig {

    private final Logger log = LoggerFactory.getLogger(CloudDatabaseConfiguration.class);

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Bean
    public ValidatingMongoEventListener validatingMongoEventListener() {
        return new ValidatingMongoEventListener(validator());
    }

    @Bean
    public MongoCustomConversions customConversions() {
        List<Converter<?, ?>> converterList = new ArrayList<>();
        converterList.add(DateToZonedDateTimeConverter.INSTANCE);
        converterList.add(ZonedDateTimeToDateConverter.INSTANCE);
        converterList.add(DurationToLongConverter.INSTANCE);
        return new MongoCustomConversions(converterList);
    }
    
    public MongockInitializingBeanRunner mongockInitializingBeanRunner(
            ApplicationContext springContext,
            MongoTemplate mongoTemplate){
        return MongockSpring5.builder()
            .setDriver(SpringDataMongo3Driver.withDefaultLock(mongoTemplate))
            .addChangeLogsScanPackage("com.jawnz.gate.config.dbmigrations")
            .setSpringContext(springContext)
            .buildInitializingBeanRunner();
      }
    
}
